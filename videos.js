// ============================================================
//  只需要编辑这个文件，就能修改网站标题、项目和视频。
// ============================================================
//
//  结构：网站 → 项目 → 章节 → 视频
//
//  每个视频有三个语言版本，把链接分别粘贴到对应的引号里：
//    links: { 中文: "中文视频链接", English: "英文视频链接", Español: "西班牙语视频链接" },
//  还没有的版本留空 ""，网页上那个语言按钮会显示为灰色。
//
//  支持的链接：
//    - YouTube：     https://youtu.be/XXXXXXXXXXX 或 https://www.youtube.com/watch?v=XXXXXXXXXXX
//                    （建议设为"不公开 Unlisted"）
//    - Vimeo：       https://vimeo.com/123456789
//    - Google Drive：https://drive.google.com/file/d/XXXXXXXX/view  （共享设为"知道链接的任何人"）
//
//  新增项目：复制一整段 { name: ... }, 然后修改。
//  新增视频：复制一段 { title: ... }, 然后修改。
//  注意：逗号、引号要保留，并且用英文半角符号 " , 不要用中文的 “ ，

const SITE = {
  title: "培训中心",
  subtitle: "选择你的项目，观看培训视频，看完后标记为已观看。",
};

const PROJECTS = [
  {
    name: "天工96播种墙使用培训",
    description: "天工96播种墙的入门和操作培训。",
    sections: [
      {
        title: "1. 入门",
        videos: [
          {
            title: "项目介绍", duration: "3 分钟", description: "项目背景和培训内容概览。",
            links: { 中文: "https://youtube.com/shorts/671aq9EhyGc?is=LOd0wwoyuE2NbZnP", English: "", Español: "" },
          },
          {
            title: "工具和账号", duration: "6 分钟", description: "需要用到的工具，以及在哪里找到它们。",
            links: { 中文: "", English: "", Español: "" },
          },
        ],
      },
      {
        title: "2. 操作流程",
        videos: [
          {
            title: "完整流程演示", duration: "10 分钟", description: "从头到尾的主要操作步骤。",
            links: { 中文: "", English: "", Español: "" },
          },
          {
            title: "常见错误", duration: "7 分钟", description: "容易出错的地方和解决方法。",
            links: { 中文: "", English: "", Español: "" },
          },
        ],
      },
    ],
  },
  {
    name: "天工1152播种墙使用培训",
    description: "天工1152播种墙的入门和操作培训。",
    sections: [
      {
        title: "1. 基础",
        videos: [
          {
            title: "项目概览", duration: "5 分钟", description: "天工1152播种墙的用途和基本结构。",
            links: { 中文: "", English: "", Español: "" },
          },
          {
            title: "安全规范", duration: "8 分钟", description: "必须遵守的安全和质量要求。",
            links: { 中文: "", English: "", Español: "" },
          },
        ],
      },
    ],
  },
];
