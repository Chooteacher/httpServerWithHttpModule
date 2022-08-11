const users = [
  {
    id: 1,
    name: "Lee EunJi",
    email: "zmz14s@gmail.com",
    password: "1124",
  },
  {
    id: 2,
    name: "Kim Code",
    email: "kimcode@gmail.com",
    password: "1234",
  },
];

const posts = [
  {
    id: 1,
    title: "오늘 날씨 너무 좋다",
    content: "와.... 너무좋다.....",
    userId: 1,
  },
  {
    id: 2,
    title: "여름 너무 좋아",
    content: "비오는날 너무좋아",
    userId: 1,
  },
];

const datas = [
  {
    userId: 1,
    userName: "LeeEunJi",
    postingId: 1,
    postingTitle: "으아아악",
    postingContent: "노드",
  },
  {
    userId: 2,
    userName: "KimCode",
    postingId: 2,
    postingTitle: "여름좋아",
    postingContent: "좋지만 더워..",
  },
  {
    userId: 3,
    userName: "new user 1",
    postingId: 3,
    postingImageTitle: "내용 1",
    postingContent: "sampleContent3",
  },
  {
    userId: 4,
    userName: "new user 2",
    postingId: 4,
    postingImageTitle: "내용 2",
    postingContent: "sampleContent4",
  },
];
// 회원가입
const createUser = (req, res) => {
  const user = req.body.data; // 프론트에서 받아온 정보를 가져옵니다.

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  res.json({ message: "USER_CREATED" });
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
};
// 게시글 생성
const createPost = (req, res) => {
  const post = req.body.data;

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });
  res.json({ message: "POST_CREATED" });
};

// 게시글 조회
const getPosts = (req, res) => {
  res.json({ data: datas });
};

const editPost = (req, res) => {
  datas.forEach((el) => {
    if (el.postingId === req.body.data.postingId) {
      el.postingContent = req.body.data.postingContent;
      res.json({ data: el });
      return;
    }
    res.json({ message: "존재하지 않습니다." });
  });
};

module.exports = { createUser, createPost, getPosts, editPost }; //  모듈로 내보냅니다.

// const inquireData = (req, res) => {
//   const data = req.query.data;

//   datas.push({
//     userId: data.userId,
//     userName: data.userName,
//     postingId: data.postingId,
//     postingTitle: data.postingTitle,
//     postingImageTitle: data.postingImageTitle,
//     postingContent: data.postingContent,
//   });
// };
