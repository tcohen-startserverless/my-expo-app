/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      profile: input?.stage === "prod" ? "prod" : "dev",
      providers: {
        aws: {
          region: "us-west-2",
          profile: "start-serverless-dev",
        },
      },
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("Bucket");
    const table = new sst.aws.Dynamo("Table", {
      fields: {
        pk: "string",
        sk: "string",
      },
      primaryIndex: {
        hashKey: "pk",
        rangeKey: "sk",
      },
    });
    const myApi = new sst.aws.Function("MyApi", {
      url: true,
      link: [bucket, table],
      handler: "packages/functions/src/index.handler",
    });
    new sst.x.DevCommand("expo", {
      dev: {
        command: "bun run start",
        directory: "packages/frontend",
        autostart: true,
      },
      link: [myApi],
      environment: {
        EXPO_USE_METRO_WORKSPACE_ROOT: "1",
        EXPO_PUBLIC_API_URL: myApi.url,
      },
    });
    return {
      api: myApi.url,
    };
  },
});
