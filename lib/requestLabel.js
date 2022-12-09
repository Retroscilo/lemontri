/**
 * @param {File} File
 * @return {{ labelName: string, labelId, confidence }}
 */
export default async function requestLabel(File) {
  const form = new FormData();
  form.append("data", File);

  try {
    const res = await fetch("https://www.nyckel.com/v1/functions/bmf6nuodu19rbn1x/invoke", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2NzA1NzU3ODUsImV4cCI6MTY3MDU3OTM4NSwiaXNzIjoiaHR0cHM6Ly93d3cubnlja2VsLmNvbSIsImNsaWVudF9pZCI6IjRveGt1YXozZXF1eG4zZTQyaXc5bDEya2R1NTZjNWE1IiwianRpIjoiN0E0MTJDMkM5MzlFNEEwMjM2ODExNkNCNDdDRkVEMEEiLCJpYXQiOjE2NzA1NzU3ODUsInNjb3BlIjpbImFwaSJdfQ.IjY-VpbOVEEu7ChULzFcQeUewkzuANB2MOGpmUlaEJxsTc36dUjvTdQO-N27Jgen8-b00kJWDjQ6Czo-Nmr8kBhaNdCfcief92lmwkbeO3Vv8oebG3GImrUlIZfwk5DiwP6H1AAUiSdZxBf5B6YwMLKpB1lC9TpuetASVwaZayq2eZ6_7Gx4Xx7jJacNv4ZTZ8nKZpA-AsN3Loyy-6z5BV1gyTJl41nsWwG4zHBh1dvEO7IS2vN9GqfpJXpvJLeR43hYSl-jukuEDcetpFXHRtyXee6NQtB5gurUpcw1R0fGikDZPgWGH9adNYj1nNIzQenjikCsGt0f9RZ1xlDA-w",
      },
      body: form,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
