// ============================================================
//  只需要编辑这个文件，就能修改网站标题、项目和视频。
// ============================================================
//
//  结构：网站 → 项目 → 章节 → 视频
//
//  每个视频把分享链接粘贴到 link: "" 的引号里，支持：
//    - YouTube：     https://www.youtube.com/watch?v=XXXXXXXXXXX   （建议设为"不公开 Unlisted"）
//    - YouTube：     https://youtu.be/XXXXXXXXXXX
//    - Vimeo：       https://vimeo.com/123456789
//    - Google Drive：https://drive.google.com/file/d/XXXXXXXX/view  （共享设为"知道链接的任何人"）
//    - 自己的文件：   videos/my-video.mp4  （放在 videos 文件夹里，建议小于 100MB）
//
//  link 留空 "" 时，页面会显示"还没有视频链接"。
//
//  新增项目：复制一整段 { name: ... }, 然后修改。
//  新增视频：复制一段 { title: ... }, 然后修改。
//  注意：逗号和引号要保留，和示例一样。

const SITE = {
  title: "培训中心",
  subtitle: "选择你的项目，观看培训视频，看完后标记为已观看。",
};

const PROJECTS = [
  {
    name: "项目 A",
    description: "项目 A 的入门和操作培训。",
    sections: [
      {
        title: "1. 入门",
        videos: [
          { title: "项目介绍", duration: "3 分钟", description: "项目背景和培训内容概览。", link: "" },
          { title: "工具和账号", duration: "6 分钟", description: "需要用到的工具，以及在哪里找到它们。", link: "" },
        ],
      },
      {
        title: "2. 操作流程",
        videos: [
          { title: "完整流程演示", duration: "10 分钟", description: "从头到尾的主要操作步骤。", link: "" },
          { title: "常见错误", duration: "7 分钟", description: "容易出错的地方和解决方法。", link: "" },
        ],
      },
    ],
  },
  {
    name: "项目 B",
    description: "项目 B 的培训视频。",
    sections: [
      {
        title: "1. 基础",
        videos: [
          { title: "项目 B 概览", duration: "5 分钟", description: "项目 B 的目标和分工。", link: "" },
          { title: "安全规范", duration: "8 分钟", description: "必须遵守的安全和质量要求。", link: "" },
        ],
      },
    ],
  },
];
