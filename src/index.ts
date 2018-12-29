import { cwd } from 'process'
import { join } from 'path'
/**
 * userdefine require
 * @param model 
 * @param map 
 * @param base_dir 
 */
export default function castle_require(model: string, map: { [index: string]: string } = {}) {
    // 转为标准定义
    if (map[model]) {
        model = map[model]
    }
    return require(model)
}