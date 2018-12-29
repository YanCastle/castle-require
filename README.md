# castle-require
解析配置并加载对应的模块，用于自定义规则加载
```typescript
import crequire from 'castle-require'
// 当传入为default值时默认加载castle-session-redis包
crequire('default',{default:'castle-session-redis'})
// 如果找不到对应的包则直接当做标准require来处理
```
