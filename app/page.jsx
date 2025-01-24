'use client'

import { Moon, FolderOpen } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"

const tools = [
  {
    id: '1',
    icon: 'https://ctblog.top/favicon.ico',
    title: 'ctblog',
    tag: '我的项目',
    description: '我的博客...',
    url: 'https://ctblog.top'
  },
  {
    id: '2',
    icon: 'https://ai-assistant.ctblog.top/favicon.ico',
    title: 'AI Daddy',
    tag: '我的项目',
    description: '我开发的AI虚拟助手',
    url: 'https://ai-assistant.ctblog.top'
  },
  {
    id: '3',
    icon: 'https://cube-timer.ctblog.top/favicon.ico',
    title: 'Cuber Timer',
    tag: '我的项目',
    description: '我开发的魔方计时器',
    url: 'https://cube-timer.ctblog.top/'
  },
  {
    id: '4',
    icon: 'https://www.iconfont.cn/favicon.ico',
    title: 'iconfont',
    tag: '前端工具',
    description: '阿里巴巴矢量图标库',
    url: 'https://www.iconfont.cn/'
  },
  {
    id: '5',
    icon: 'https://www.tailwindcss.cn/favicons/favicon.ico?v=3',
    title: 'tailwind css',
    tag: '前端工具',
    description: '只需写HTML,无需写CSS,即可快速构建美观的网站',
    url: 'https://www.tailwindcss.cn/'
  },
  {
    id: '6',
    icon: 'https://zh-hans.react.dev//favicon.ico',
    title: 'react',
    tag: '前端工具',
    description: 'react中文官网',
    url: 'https://zh-hans.react.dev/'
  },
  {
    id: '7',
    icon: 'https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png',
    title: 'mdn web doc',
    tag: '前端工具',
    description: 'javascript方法查询文档',
    url: 'https://developer.mozilla.org/zh-CN/'
  },
  {
    id: '8',
    icon: 'https://nextui.org/favicon.ico',
    title: 'Next UI',
    tag: '前端工具',
    description: 'Next UI 官方文档',
    url: 'https://nextui.org/'
  },
  {
    id: '9',
    icon: 'https://magicui.design//favicon.ico',
    title: 'Magic UI',
    tag: '前端工具',
    description: 'Magic UI 官方文档',
    url: 'https://magicui.design/'
  },
  {
    id: '10',
    icon: 'https://ui.aceternity.com/favicon.ico',
    title: 'AceternityUI',
    tag: '前端工具',
    description: 'AceternityUI 官方文档',
    url: 'https://ui.aceternity.com/'
  },
  {
    id: '11',
    icon: 'https://ui.shadcn.com/favicon.ico',
    title: 'Shadcn UI',
    tag: '前端工具',
    description: 'Shadcn UI 官方文档',
    url: 'https://ui.shadcn.com/'
  },
  {
    id: '12',
    icon: 'https://convertfree.com/static/images/favico.png',
    title: 'Convert Free',
    tag: '实用工具',
    description: '免费文件转换',
    url: 'https://convertfree.com/cn'
  },
  {
    id: '13',
    icon: 'https://byrutgame.org/favicon.ico',
    title: 'byretgame',
    tag: '实用工具',
    description: '来自俄罗斯的破解版游戏下载网站',
    url: 'https://byrutgame.org/'
  },
  {
    id: '14',
    icon: 'https://ctblog.top/favicon.ico',
    title: '美区苹果id',
    tag: '实用工具',
    description: '提供免费的美区苹果id',
    url: 'https://idshare001.me/chong.html'
  },
  {
    id: '15',
    icon: 'https://cobalt.tools/favicon.png',
    title: 'cobalt',
    tag: '实用工具',
    description: 'cobalt强大的视频下载网站',
    url: 'https://cobalt.tools/'
  },
  {
    id: '16',
    icon: 'https://www.remove.bg/favicon.ico?v=fc0bfce6e1310f1539afec9729716721',
    title: 'removebg',
    tag: '实用工具',
    description: '免费移除图片背景',
    url: 'https://www.remove.bg/zh'
  },
  {
    id: '17',
    icon: 'https://ome.tv/images/logo.svg',
    title: 'ome tv',
    tag: '实用工具',
    description: '与来自全球的随机朋友视频聊天',
    url: 'https://ome.tv/'
  },
  {
    id: '18',
    icon: 'https://byrutgame.org/favicon.ico',
    title: 'byretgame',
    tag: '实用工具',
    description: '来自俄罗斯的破解版游戏下载网站',
    url: 'https://byrutgame.org/'
  },
  {
    id: '19',
    icon: 'https://fish.audio/logo-circle-64.png',
    title: 'Fish Audio',
    tag: 'AI生产力',
    description: 'Fish Audio可以基于声音模型生成语音。',
    url: 'https://fish.audio/zh-CN/'
  },
  {
    id: '20',
    icon: 'https://v0.dev/assets/icon.svg',
    title: 'V0.dev',
    tag: 'AI生产力',
    description: 'V0.dev可以生成前端代码，基于tsx语法。',
    url: 'https://v0.dev/'
  },
  {
    id: '21',
    icon: 'https://viggle.ai/favicon.ico',
    title: 'Viggle AI',
    tag: 'AI生产力',
    description: 'Viggle AI 提供基于AI的视频分析和处理工具。',
    url: 'https://viggle.ai/home'
  },
  {
    id: '22',
    icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
    title: '豆包',
    tag: 'AI生产力',
    description: '豆包AI 强大的AI工具',
    url: 'https://www.doubao.com/'
  },
  {
    id: '23',
    icon: 'https://hailuoai.com/favicon.ico',
    title: '海螺视频 AI',
    tag: 'AI生产力',
    description: '海螺AI提供高质量的AI视频生成',
    url: 'https://hailuoai.com/video'
  },
  {
    id: '24',
    icon: 'https://cdn.deepseek.com/chat/icon.png',
    title: 'DeepSeek Chat',
    tag: 'AI生产力',
    description: '一个AI驱动的聊天平台，提供智能对话功能。',
    url: 'https://chat.deepseek.com/'
  },
  {
    id: '25',
    icon: 'https://cdn.oaistatic.com/assets/favicon-32x32-p4ktpm1x.webp',
    title: ' ChatGPT',
    tag: 'AI生产力',
    description: '由OpenAI开发的ChatGPT',
    url: 'https://chatgpt.com/'
  },
  {
    id: '26',
    icon: 'https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png',
    title: 'GitHub',
    tag: '实用工具',
    description: '全球最大的代码托管网站',
    url: 'https://github.com/'
  },
  {
    id: '27',
    icon: 'https://vercel.com/favicon.ico',
    title: 'Vercel',
    tag: '实用工具',
    description: '免费部署前端项目',
    url: 'https://vercel.com/'
  },
  {
    id: '28',
    icon: 'https://fanyi.baidu.com/favicon.ico',
    title: '百度翻译',
    tag: '实用工具',
    description: '强大的语言翻译网站',
    url: 'https://fanyi.baidu.com/mtpe-individual/multimodal#/'
  },
  {
    id: '29',
    icon: 'https://vercel.com/favicon.ico',
    title: 'Vercel',
    tag: '实用工具',
    description: '免费部署前端项目',
    url: 'https://vercel.com/'
  },
  {
    id: '30',
    icon: 'https://www.qijishow.com/images/logo.png',
    title: '奇迹秀',
    tag: '实用工具',
    description: '设计相关的软件资源',
    url: 'https://www.qijishow.com/'
  },
  {
    id: '31',
    icon: 'https://ctblog.top/favicon.ico',
    title: '百度网盘会员',
    tag: '实用工具',
    description: '百度网盘会员3元一天',
    url: 'http://b.topanku.com/'
  },
  {
    id: '32',
    icon: 'https://zhutix.com/favicon.ico',
    title: '致美化',
    tag: '实用工具',
    description: '视觉美化研究平台',
    url: 'https://zhutix.com/'
  },
  {
    id: '33',
    icon: 'https://nextjs.org/favicon.ico',
    title: 'Next.js',
    tag: '前端工具',
    description: 'Next.js官方网站',
    url: 'https://nextjs.org/'
  },
  {
    id: '34',
    icon: 'https://www.4kvm.pro/favicon.ico',
    title: '4K影视美剧',
    tag: '实用工具',
    description: '美剧的天堂',
    url: 'https://www.4kvm.pro/'
  },
  {
    id: '35',
    icon: 'https://reactflow.dev/img/favicon.ico',
    title: 'React Flow',
    tag: '前端工具',
    description: '在react中实现基于节点的UI',
    url: 'https://reactflow.dev'
  },
  {
    id: '36',
    icon: 'https://leetcode.cn/favicon.ico',
    title: '力扣（LeetCode）',
    tag: '后端工具',
    description: '算法学习刷题网站',
    url: 'https://leetcode.cn/'
  },
  {
    id: '37',
    icon: 'https://framerusercontent.com/images/FEF0Xp0qllCZsG1uilpmdZAzD8.png',
    title: 'React Motion',
    tag: '前端工具',
    description: '在React中实现非常丝滑的动画',
    url: 'https://motion.dev/'
  },,
  {
    id: '38',
    icon: 'https://obs.gduamoe.com/upload/site_ico/20240624-1/6a5d6bac72b551e3d1fdf9e48c1876d7_180x180.png',
    title: '追剧影视',
    tag: '实用工具',
    description: '免费在线播放高清影视',
    url: 'https://zjuys.com/'
  },,
  {
    id: '39',
    icon: 'https://excalidraw.com/favicon-32x32.png',
    title: 'Excalidraw',
    tag: '实用工具',
    description: '免费且功能强大的在线白板',
    url: 'https://excalidraw.com/'
  },







  // Add more tools as needed
]

const categories = ['全部工具', '我的项目', '实用工具', 'AI生产力', '前端工具', '后端工具', '学习资料']

export default function Page() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('全部工具') // 存放分类选择，默认全部
  const [searchQuery, setSearchQuery] = useState('') // 存放搜索输入框内容

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const filterdTools = tools.filter(tool => {
    return (selectedCategory === '全部工具' || tool.tag === selectedCategory) &&
      (
        tool.title.includes(searchQuery.trim()) ||
        tool.url.includes(searchQuery.trim()) ||
        tool.description.includes(searchQuery.trim())
      )
  })

  return (
    <div className={`min-h-screen p-4 md:p-8 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Profile Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src="avatar.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg text-gray-900 dark:text-white">陈涛のNav Station</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">个人收藏夹</p>
            </div>
          </div>

          {/* Button */}
          <Button onClick={() => window.location.href = 'https://www.ctblog.top'} variant="outline" className="flex items-center gap-2">
            <span>我的博客</span>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="搜索你想搜的工具...."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {filterdTools.length > 0 ? filterdTools.map((tool) =>
            <a href={tool.url} key={tool.id}>
              <div
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium dark:text-white">{tool.title}</h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {tool.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center ">
              <FolderOpen className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                该分类下暂无内容
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                您可以点击右上角的"添加网站"按钮来添加新的网站到此分类
              </p>
              <button
                onClick={() => setSelectedCategory('全部工具')}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                查看所有工具
              </button>
            </div>
          )
          }

        </div>

        {/* <a href="https://icp.gov.moe/?keyword=20250052" target="_blank">萌ICP备20250052号</a>ß */}

        <footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-12">
          <div className="flex justify-center items-center text-sm text-gray-600 dark:text-gray-400">
            <span>© 2025 网站导航. All rights reserved by Chentao.</span>
            <span className="mx-2">|</span>
            <span>备案号: <a href="https://icp.gov.moe/?keyword=20250052" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">萌ICP备20250052号</a></span>
          </div>
        </footer>


        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg"
        >
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  )
}

