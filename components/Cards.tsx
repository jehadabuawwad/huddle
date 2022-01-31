import { useSelector, RootStateOrAny } from "react-redux";
import { Container } from "./styles/Container";
import { Photo } from "./styles/Photo";
import { Card } from "./styles/Card";
interface ICardProps {}

const Cards: React.FunctionComponent<ICardProps> = (props) => {
  const data = useSelector((state: RootStateOrAny) => state.data);
  const load = (image: any) => {
    return `../public/images/${image}`;
  };

  return (
    <>
      {data.map((item: any) => {
        return (
          <>
            <Card
              title='content-container'
              key={item.id}
              layout={item.id % 2 === 0 && "row-reverse"}
            >
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <Photo
                as='img'
                title='contant-image'
                src={`../images/${item.image}`}
                alt='content-image'
              />
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
