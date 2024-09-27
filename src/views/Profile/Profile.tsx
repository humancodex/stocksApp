import React from 'react';
import { StatusBar } from 'react-native';
import { StackProps } from '@navigator/stack';
import { YStack, Text, Button, Image, styled } from 'tamagui';

const Card = styled(YStack, {
  bg: '$white',
  p: '$3',
  borderRadius: 8,
  elevation: 2,
  width: '100%',
  mb: '$2',
});

function Profile({ navigation }: StackProps) {
  return (
    <YStack flex={1} ai="center" jc="center" bg="$lightGrayPurple" gap="$4" p="$4">
      <StatusBar barStyle="light-content" />
      {/* Profile Photo */}
      <Image
        source={{ uri: 'https://example.com/profile-photo.jpg' }}
        width={100}
        height={100}
        borderRadius={50}
        mb="$4"
      />
      <Text fontSize={24} mb="$4">
        Profile
      </Text>
      {/* Follow Button */}
      <Button
        onPress={() => {
          /* Handle follow action */
        }}
        marginBottom="$4">
        Follow
      </Button>
      {/* Favorite Stocks Section */}
      <YStack gap="$2" width="100%">
        <Text fontSize={20} fontWeight="bold">
          Favorite Stocks
        </Text>
        <YStack gap="$2">
          {/* Card for each stock */}
          <Card>
            <Text>Stock A</Text>
          </Card>
          <Card>
            <Text>Stock B</Text>
          </Card>
          <Card>
            <Text>Stock C</Text>
          </Card>
        </YStack>
      </YStack>
      {/* Portfolio Section */}
      <YStack gap="$2" width="100%">
        <Text fontSize={20} fontWeight="bold">
          Portfolio
        </Text>
        <YStack gap="$2">
          {/* Card for each portfolio item */}
          <Card>
            <Text>Portfolio Item</Text>
          </Card>

        </YStack>
      </YStack>
      {/* <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('DetailsStack', { from: 'Profile' });
        }}
      /> */}
    </YStack>
  );
}

export default Profile;
