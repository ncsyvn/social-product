import { Avatar, Card } from 'antd';

const cardTitle = (title) => {
    return (<div>
        <span>{title}</span>
    </div>)
}
const { Meta } = Card;

const CardOverview = ({title="", cardStyle={}}) => {
    return (<Card
        // loading={true}
        title={cardTitle(title)}
        style={{
          width: "100%",
          borderRadius: "5px",
          ...cardStyle
        }}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
      </Card>)
}

export default CardOverview;