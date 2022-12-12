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
          "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2NzA4Mzk3MzYsImV4cCI6MTY3MDg0MzMzNiwiaXNzIjoiaHR0cHM6Ly93d3cubnlja2VsLmNvbSIsImNsaWVudF9pZCI6IjRveGt1YXozZXF1eG4zZTQyaXc5bDEya2R1NTZjNWE1IiwianRpIjoiOUU2RUUwNDQyNDdBNjg0NjI4MUQwNkQzOTBEMTJBOTYiLCJpYXQiOjE2NzA4Mzk3MzYsInNjb3BlIjpbImFwaSJdfQ.oBHRIMU8c0CgknsLQCjvhc-Q6mf53bqAVHPsNKkdfS4G7oV1rinu46WCPJZbz-ewz8An7Sk7DowmZD4VPU5d200VN_SFfVzKrZGfjG31fboYd-2QrRc50UYjh9Vps_OYwFOMufdeCZZV3b6Msl_VPqyU7PxIsnIjvs3tZ2_IMxzMpPGL8VEUqxGa4by7CFnCcyVJWGJN3HixY7aoqP0cjcFURRCl8l8WV6P5uOhJ1-MmLBebdC7KDIbs16-XaNZ1ThtxVfXRq12wNuWetxAfOjWmUu-B_4NBOg_bzkhRVaSRdk3Ce0x43TTAmNDcaSviMZR0rtDoWUk_Y4DhIyRdmA",
      },
      body: form,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
