import { Avatar, Card } from 'antd';
import MultipleAxes from '../../common/chart/MultipleAxes';


const cardTitle = () => {
    return (<div>
        <MultipleAxes></MultipleAxes>
      </div>)
}
const { Meta } = Card;

const VisitorBarChart = ({title="", cardStyle={}}) => {
    return (<Card
        // loading={true}
        title={cardTitle()}
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

export default VisitorBarChart;