export function toCamel(row: any) {
  const newObj: any = {};

  for (const key in row) {
    // snake_case나 lower-only 케이스 모두 처리
    const camelKey = key
      .replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()) // snake -> camel
      .replace(/([a-z])([A-Z])/g, (_, a, b) => a + b); // 안전하게 유지

    newObj[camelKey] = row[key];
  }

  return newObj;
}