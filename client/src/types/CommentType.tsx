export interface CommentType {
  comment: string;
  name: string;
  createdAt: Date;
  _id?: string;
}

export interface NewCommentType {
  comment: string;
  name: string;
}
