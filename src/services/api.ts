import Domain from './domain';
let basUrl: string,
  applyUrl: string,
  raceUrl: string,
  artUrl: string,
  authorityUrl: string,
  clubUrl: string,
  oldApply: string,
  advertUrl: string,
  complexUrl: string;
  applyUrl = Domain.APPLY;
  basUrl = Domain.USER;
  raceUrl = Domain.RACE;
  artUrl = Domain.ART;
  authorityUrl = Domain.AUTHORITY;
  clubUrl = Domain.CLUB;
  oldApply = Domain.OLDAPPLY;
  advertUrl = Domain.ADVERT;
  complexUrl = Domain.COMPLEX
// var ishttps:number = 'https:' === document.location.protocol ? 1: 0;
export default {
  user: {
    login: basUrl + '/public/public/login',
    getUser: basUrl + '/public/user/get',
    qiniu: basUrl + '/public/upload/getuploadToken',
    sendCode: basUrl + '/public/public/sendcode',
    resetPsw: basUrl + '/public/public/resetpassword',
    register: basUrl + '/public/public/register',
    verifyToken: basUrl + '/public/user/verifyToken',
    getUserInfo: basUrl + '/public/user/get',
    updateUserInfo: basUrl + '/public/user/update',
    unbindWxPhone: basUrl + '/public/user/unbindWxPhone'
  },
  race: {
    getRaceList: applyUrl + '/public/public/getgamefulllist',
    getGame: applyUrl + '/public/public/getgame',
    getRealtedRace: applyUrl + '/public/public/getrelatedgamelist',
    getMyRace: applyUrl + '/public/personal_center/getmygamelist'
  },
  message: {
    getMessageList: complexUrl + '/public/article/getlist',
    getDetail: complexUrl + '/public/article/get'
  },
  notice: {
    getList: complexUrl + '/public/notice/getlist',
    getNotice: complexUrl + '/public/notice/get'
  },
  sponsor: {
    getList: complexUrl + '/public/sponsor/getlist',
    get: complexUrl + '/public/sponsor/get'
  },
  topic: {
    getTopicList: complexUrl + '/public/topic/getlist',
    getPostList: complexUrl + '/public/topic/getpostlist',
    getTopic: complexUrl + '/public/topic/get',
    getPost: complexUrl + '/public/topic/getpost',
    replyToTopic: complexUrl + '/public/topic/post',
    replyPost: complexUrl + '/public/topic/reply',
    interest: complexUrl + '/public/topic/interest',
    delinterest: complexUrl + '/public/topic/delinterest',
    hit: complexUrl + '/public/topic/hit',
    delhit: complexUrl + '/public/topic/delhit',
    getreplylist: complexUrl + '/public/topic/getreplylist',
  },
  collection: {
    getFolderList: complexUrl + '/public/collection/getdirlist',
    getFileList: complexUrl + '/public/collection/getlist'
  },
  qiniuToken: {
    qiniu: basUrl + '/public/upload/getuploadToken'
  },
  share: {
    getJsapiTicket: basUrl + '/public/weixin/getJsapiTicket'
  },
  advert: {
    getAdvertList: advertUrl + '/manage/advert/getbysystem',
    addLog: advertUrl + '/manage/advert_log/add'
  }
};
