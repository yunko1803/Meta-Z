const handleResult = async (result: Response) => {
  const json = await result.json()

  if (!result.ok) {
    console.error(json)
  }

  return json
}

export async function get<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const result = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
    },
  })

  return handleResult(result)
}

// export async function post(url: string, data: any, options = {}) {

//   const result = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     ...options,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   return handleResult(result);
// }

// export async function patch(path, data, options = {}) {
//   const url = BASE_URL + path;

//   const result = await fetch(url, {
//     method: 'PUT',
//     body: JSON.stringify(data),
//     ...options,
//     headers: {
//       ...options.headers,
//       'Content-Type': 'application/json',
//     },
//   });

//   return handleResult(result);
// }

const Request = {
  get,
}

export default Request
