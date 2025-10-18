export function logError(err: Error, context: Record<string, any> = {}) {
  const safe = { ...context };

  delete safe.email;
  delete safe.phone;
  delete safe.message;
  delete safe.name;

  console.error(err, safe);
}

export function logInfo(msg: string, context: Record<string, any> = {}) {
  const safe = { ...context };
  delete safe.email;
  delete safe.phone;
  delete safe.message;
  delete safe.name;

  console.log(msg, safe);
}
