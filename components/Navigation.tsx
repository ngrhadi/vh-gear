import { Button, Card, Stack } from '@mantine/core';
import React from 'react';

export const Navigation = () => {
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <Stack
      align="center"
      justify="center"
      sx={{
        paddingTop: '10px',
        paddingBottom: '10px',
      }}
    >
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Chestplate
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Legging
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Boots
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Helmet
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Sword
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Axes
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Shield
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Idona
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Tenos
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Valera
      </Card>
      <Card
        shadow="sm"
        p="md"
        radius="md"
        withBorder
        bg="transparent"
        onClick={(e) => handleChange(e)}
        sx={{
          color: 'white',
          width: '110px',
          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        Wendaar
      </Card>
    </Stack>
  );
};
