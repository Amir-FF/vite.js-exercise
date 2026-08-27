import { defineConfig } from "vite"

export default defineConfig(({ command, mode }) => {
    console.log(command, mode);

    if (command === 'server') {
        return {}
    }

    return {
        // build: {
        //     outDir: 'out'
        // }
    }
})


// export default defineConfig({
//     build: {
//         outDir: 'out'
//     }
// })


// export default {
//     build: {
//         outDir: 'out',
//         target: 'es2015'
//     }
// }