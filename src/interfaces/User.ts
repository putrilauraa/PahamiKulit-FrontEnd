export interface User {
    id: number;
    email: string;
    username: string;
    gender: string;
    image: string;
    skin_test_result: {id: string; name: string;}
  }
