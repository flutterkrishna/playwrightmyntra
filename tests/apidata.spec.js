import { test, expect } from '@playwright/test';

test('GET API test', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.id).toBe(2);
});



test('POST API test', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'test title',
      body: 'test body',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body);
});


test('Update API test', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      title: 'test titles',
      body: 'test bodys',
      userId: 1
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
});