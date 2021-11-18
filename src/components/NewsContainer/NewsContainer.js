import React from "react";
import "./NewsContainer.css";
import { FormattedMessage } from "react-intl";

export default function NewsContainer() {
  return (
    <div className="news-container">
      <div className="news">
        <h2 className="news__title">
          <FormattedMessage
            id="app.news.title"
            defaultMessage="Latest News"
            description="Latest News"
          />
        </h2>
      </div>
      <div className="news__cards">
        <div className="news__card">
          <div className="news__title news__heading">Some Heading</div>
          <div className="news__content">
            When you are designing with Lorem Ipsum, you diminish the importance
            of the copy by lowering it to the same level as any other visual
            element. The text simply becomes another supporting role, serving to
            make other aspects more aesthetic. Instead of your design enhancing
            the meaning of the content, your content is enhancing your design.
          </div>
        </div>
        <div className="news__card">
          <div className="news__title news__heading">Some Heading</div>
          <div className="news__content">
            When you are designing with Lorem Ipsum, you diminish the importance
            of the copy by lowering it to the same level as any other visual
            element. The text simply becomes another supporting role, serving to
            make other aspects more aesthetic. Instead of your design enhancing
            the meaning of the content, your content is enhancing your design.
          </div>
        </div>

        <div className="news__card">
          <div className="news__title news__heading">Some Heading</div>
          <div className="news__content">
            When you are designing with Lorem Ipsum, you diminish the importance
            of the copy by lowering it to the same level as any other visual
            element. The text simply becomes another supporting role, serving to
            make other aspects more aesthetic. Instead of your design enhancing
            the meaning of the content, your content is enhancing your design.
          </div>
        </div>
      </div>
    </div>
  );
}
