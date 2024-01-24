export default defineEventHandler(async (event) => {
  const config = { password: "bZGArAFfVvFtcaYuQXqxgsaJhpRUTvvs" };
  let session = await getSession(event, config);
  session.data = session.data || { visits: 0 };
  session.data.visits = session.data.visits + 1;
  await updateSession(event, config, session.data);
  return { data: session.data };
});
