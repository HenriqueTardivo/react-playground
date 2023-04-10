import {} from "phosphor-react";
import { usePaginator } from "./logic/usePaginator";

interface Props<T> {
  current: number;
  page_lenght: number;
  data: T[];
}

export function Paginator<T>(props: Props<T>) {
  const {} = usePaginator();

  return (
    <div>
      <div></div>
    </div>
  );
}
