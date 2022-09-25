// Help: https://github.com/a7ul/esbuild-node-tsc
const config = {
    // Supports all esbuild.build options
    esbuild: {
        minify: false,
        target: "esnext",
        platform: "node",
        bundle: true,
        sourcemap: true,
        format: "esm",
    },
};

export default config
