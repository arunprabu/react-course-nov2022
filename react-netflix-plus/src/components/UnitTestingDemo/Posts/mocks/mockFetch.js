const mockPostList = [
  {
    id: 1,
    title: 'cricket match #1 result',
    body: '.....'
  },
  {
    id: 2,
    title: 'cricket match #2 result',
    body: '.....'
  }
]

export const mockFetch = async () => {
  return {
    ok: true,
    status: 200,
    json: async () => {
      return mockPostList;
    }
  }
}
