export class PostLens<P extends Post> {
    post: P;
    constructor(post: P) {
      this.post = post;
    }
    private castHttpPicture = (src: string) => {
      if (src.indexOf("sinaimg.cn") !== -1) {
        return src.replace("https://", "http://");
      } else {
        return src;
      }
    };
    private getWebsiteAuthorName = (post: WebsitePost) => {
      return ("" + (post.url.site.url || ""))
        .replace("http://", "")
        .replace("https://", "");
    };
    public get() {
      return this.post;
    }
    public getAuthorAvatar() {
      return "";
    }
}

class LensInstagram extends PostLens<InstagramPost> {
    public getAuthorAvatar() {
      return this.post.user.profileImg;
    }
    public getAuthorId() {
      return this.post.user.id;
    }
    public getInfluencerUid() {
      return this.post.user.screenName;
    }
    public getAuthorName() {
      return this.post.user.anonymous ? null : this.post.user.screenName;
    }
  }

class LensPinterest extends PostLens<PinterestPost> {
    public getAuthorAvatar() {
      return this.post.user.profileImg;
    }
    public getAuthorId() {
      return this.post.user.id;
    }
  }
  

const postPlatforms = {
    [Platform.Bilibili]: LensBilibili,
    [Platform.Blog]: LensBlogMediaWebsite,
    [Platform.Comment]: LensCommentForum,
    [Platform.Dailymotion]: LensDailymotion,
    [Platform.Facebook]: LensFacebook
  };



export class PostLensFactory<P extends Post> {
  post: P;
  static create<P extends Post>(post: P): PostLens<P> {
    if (postPlatforms[post.origin.platform]) {
      return new postPlatforms[post.origin.platform](post);
    }
    return new PostLens(post);
  }
}
