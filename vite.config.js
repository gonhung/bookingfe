/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

dotenv.config();

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        define: {
            APP_URL: JSON.stringify(env.API),
            SOCKET_URL: JSON.stringify(env.SOCKET_URL),
        },
        build: {
            rollupOptions: {
                plugins: [nodeResolve(), commonjs()],
            },
        },
        optimizeDeps: {
            include: ['jwt-decode'],
        },
    };
});
