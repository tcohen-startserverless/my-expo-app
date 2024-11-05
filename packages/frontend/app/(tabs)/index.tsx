import { client } from '@/api';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHello = async () => {
      const res = await client.hello.$get();
      const data = await res.json();
      setMessage(data.message);
    };
    fetchHello();
  }, []);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
