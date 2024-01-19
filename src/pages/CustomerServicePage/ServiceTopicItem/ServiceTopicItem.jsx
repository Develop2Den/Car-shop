import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceTopicItem.module.scss';
import classNames from 'classnames';

const Paragraphs = ({ paragraphs }) => {
    return (
        <div className={styles.topicItemText}>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.topicItemParagraph}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

const ServiceTopicItem = ({ header, description, id, items }) => {
    const toggleParagraph = (e) => {
        e.stopPropagation();
        const target = e.target;
        const currentElem = e.currentTarget;
        if (!target.classList.contains(styles.topicItemHeader)) return;
        currentElem.classList.toggle(styles.hiddenContent);
    };

    return (
        <>
            <div className={styles.topicHeaderWrapper}>
                <h3 id={id} className={styles.topicHeader}>
                    {header}
                </h3>
                {description && <p className={styles.topicDescription}>{description}</p>}
            </div>

            {items.map(({ itemName, itemParagraphs }, index) => (
                <div
                    key={`asdfasd${index}`}
                    className={classNames(styles.topicItem, styles.hiddenContent)}
                    onClick={toggleParagraph}
                >
                    <h4 className={styles.topicItemHeader}>{itemName}</h4>
                    <Paragraphs paragraphs={itemParagraphs} />
                </div>
            ))}
        </>
    );
};

export default ServiceTopicItem;

ServiceTopicItem.propTypes = {
    header: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
    items: PropTypes.arrayOf(
        PropTypes.shape({
            itemName: PropTypes.string,
            itemParagraphs: PropTypes.arrayOf(PropTypes.string),
        }),
    ),
};

Paragraphs.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string),
};
