import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import moment from 'moment';

import {useGetNewsQuery} from "../services/cryptoNewsApi";


const {Text, Title} = Typography
const {Option} = Select;

const demoImage = 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';

const News = ({simplified}) => {
    const {data: cryptoNews, isFetching, error} = useGetNewsQuery({
        newsCategory: 'CryptoCurrency',
        count: simplified ? 6 : 12
    });


    if (!cryptoNews?.value) return "Loading...";

    console.log(cryptoNews, error);
    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={9} key={i}>
                    <Card hoverable className={'news-card'}>
                        <a href={news.url} target={"_blank"}>
                            <div className={'news-image-container'}>
                                <Title className={'news-title'} level={4}>
                                    {news.name}
                                </Title>
                                <img style={{maxWidth: '200px', maxHeight: '200px'}}
                                     src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name}
                                     className={'news-image'}/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                            </p>
                            <div className={'provider-container'}>
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
                                            alt={"news"}/>
                                    <Text className={'provider-name'}>{news.provider[0]?.name}</Text>
                                </div>
                                <Text>
                                    {
                                        moment(news.datePublished).startOf('ss').fromNow()
                                    }
                                </Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}


        </Row>
    );
};

export {News};