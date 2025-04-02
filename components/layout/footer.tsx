import Link from "next/link"

/**
 * 页面底部组件，包含公司信息、产品链接、公司链接和联系信息
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      {/* 容器，用于居中内容并添加内边距 */}
      <div className="container mx-auto px-4 py-12">
        {/* 使用网格布局，在中等屏幕及以上显示 4 列 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息部分 */}
          <div>
            <h3 className="font-bold text-lg mb-4">MyApp</h3>
            <p className="text-muted-foreground">打造现代化的用户体验，提供最佳的解决方案。</p>
          </div>

          {/* 产品链接部分 */}
          <div>
            <h4 className="font-medium mb-4">产品</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  功能
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  价格
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  文档
                </Link>
              </li>
            </ul>
          </div>

          {/* 公司链接部分 */}
          <div>
            <h4 className="font-medium mb-4">公司</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  招聘
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息部分 */}
          <div>
            <h4 className="font-medium mb-4">联系我们</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  联系方式
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  支持
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权和链接部分 */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} MyApp. 保留所有权利。</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

