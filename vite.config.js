import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],

    server: {
      open: true,
      port: 5500,
    },
    define: {
      "process.env.REACT_APP_API": JSON.stringify(env.REACT_APP_API),
      "process.env.REACT_APP_IMAGE": JSON.stringify(env.REACT_APP_IMAGE),
      "process.env.DATABASE": JSON.stringify(env.DATABASE),
      "process.env.PUBLIC_URL": JSON.stringify(env.PUBLIC_URL),
      // 'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
    },
  };
});
