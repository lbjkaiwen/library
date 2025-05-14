import * as TSNode from 'ts-node';
import yargs from 'yargs';
import path from 'path';

TSNode.register({
    // Don't load local tsconfig.json
    skipProject: true,
    // 仅转译，不做类型检查
    transpileOnly: true,
    // 自定义编译选项
    compilerOptions: {
      strict: false,
      target: 'es2017',
      module: 'commonjs',
      moduleResolution: 'node',
      declaration: false,
      removeComments: false,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      importHelpers: false,
      // 转换 js，支持在 ytt.config.js 里使用最新语法
      allowJs: true,
      lib: ['es2017'],
    },
  })

  export async function run(
    cmd: string | undefined,
    options: {
        configFile?: string,
    }
  ) {
    console.log(cmd, options, "=====")
  }


  if (require.main === module) {
    const argv = yargs(process.argv).alias('c', 'config').parseSync()
    run(argv._[2] as any, {
      configFile: typeof argv.config === 'string'
        ? path.resolve(process.cwd(), argv.config)
        : undefined,
    })
  }