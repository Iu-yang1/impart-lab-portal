import Fontmin from 'fontmin';
import { resolve, dirname } from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 字体源文件路径
const srcFontPath = resolve(__dirname, 'public', 'Minecraft.ttf');
// 子集化后的字体输出路径
const destFontPath = resolve(__dirname, 'public', 'generated');
// zh.json 文件路径
const zhJsonPath = resolve(__dirname, 'src', 'assets', 'locales', 'zh.json');

// 获取所有需要的字符
async function getRequiredChars() {
    // 获取 ASCII 字符
    const asciiChars = Array.from({ length: 128 }, (_, i) => String.fromCharCode(i)).join('');

    try {
        // 读取 zh.json 文件内容
        const data = await readFile(zhJsonPath, 'utf-8');
        return asciiChars + data;
    } catch (err) {
        console.error('解析中文字符时出错：', err);
        throw err;
    }
}

async function subsetFont() {
    try {
        const requiredChars = await getRequiredChars();

        const fontmin = new Fontmin()
            .src(srcFontPath)
            .use(Fontmin.glyph({
                text: requiredChars
            }))
            .dest(destFontPath);

        await new Promise((resolve, reject) => {
            fontmin.run((err) => {
                if (err) {
                    console.error('字体子集化过程中出现错误:', err);
                    return reject(err);
                }
                console.log('字体子集化完成');
                resolve();
            });
        });
    } catch (err) {
        console.error('错误：',err);
    }
}

subsetFont().then(() => {});