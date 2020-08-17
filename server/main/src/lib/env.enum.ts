const envEnum: { [key: string]: [string, any] } = {
  HTTP_HOST: ['HTTP_HOST', '0.0.0.0'],
  HTTP_PORT: ['HTTP_PORT', 3000],
  PUBLIC_DIR: ['PUBLIC_DIR', "/home/node/app/public"]
}

export const {
  HTTP_HOST,
  HTTP_PORT,
  PUBLIC_DIR } = envEnum;
export default envEnum;