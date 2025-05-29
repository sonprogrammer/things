export interface TodoCategory {
    title: string;
    items: string[];
    isAddBtn? : boolean
  }

export const mock: TodoCategory[] = [
    {
      title: "옷",
      items: ["반팔", "반바지", "자켓", "청바지"],
    },
    {
      title: "식료품",
      items: ["우유", "계란", "빵", "커피"],
    },
    {
      title: "할 일",
      items: ["운동하기", "책 읽기", "코딩 연습", "청소하기"],
    },
  ];
  