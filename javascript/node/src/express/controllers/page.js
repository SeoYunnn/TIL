exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
};
// 내 정보 페이지를 화면에 렌더링

exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};
//회원 가입 페이지를 화면에 렌더링

exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
};
// 메인 페이지를 렌더링 하면서 넌적스에 twits(게시글 목록)를 전달함.