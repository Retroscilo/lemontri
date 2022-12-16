/**
 * @param {File} File
 * @return {{ labelName: string, labelId, confidence }}
 */
export default async function requestLabel(File) {
  const form = new FormData();
  form.append("data", File);

  let token;
  try {
    const res = await fetch("https://www.nyckel.com/connect/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "client_id=4oxkuaz3equxn3e42iw9l12kdu56c5a5&client_secret=lne6hs7o3ekc8sk943ookdj3ld7z5sr9goczp7nab756gqckaw29glk74al4l7ja&grant_type=client_credentials",
    });
    token = await res.json();
  } catch (e) {
    console.log(e);
  }

  try {
    const res = await fetch("https://www.nyckel.com/v1/functions/bmf6nuodu19rbn1x/invoke", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token.access_token,
      },
      body: form,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
