import React from 'react';
import {Card, CardBody, CardLink, CardText, CardTitle} from "reactstrap";

export default function ResultItem(props) {
    const {data, type} = props;
    return (
        <Card className="result-item shadow-sm">
            <CardBody>
                <CardTitle>Review by {data.byline}, <small className="text-muted">published on {data.publication_dt}</small></CardTitle>
                <CardText>
                    {type === 'author' ? "Title " : "Authored by "}
                    <strong>
                        {type === 'author' ? data.book_title : data.book_author}
                    </strong>
                </CardText>
                <CardLink href={data.url}>go to review...</CardLink>
            </CardBody>
        </Card>
    );
}
