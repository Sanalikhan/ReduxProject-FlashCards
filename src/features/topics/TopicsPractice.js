import {React} from "react";
import {Link} from 'react-router-dom';
import {ROUTES} from '../../app/routes';

import { selectTopics } from "./topicsSlice";
import { useSelector } from "react-router-dom";



export default function Topics (){
    const topics = useSelector(selectTopics);
    return (
        <section>
            <h1>Topics</h1>
            <ul>
                {Object.values(topics).map((topic)=> (
                    <li key={topic.id} className="topic">
                        <Link to={ROUTES.topicRoute(topic.id)}>
                        <div className="topic-container">
                            <img src={topic.icon} alt=""/>
                            <div>
                                <h2>{topic.name}</h2>
                                <p>{topic.quizIds.length} Quizzes</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to={ROUTES.newTopicRoute()}>
            <button>Create New Topic</button>
            </Link>
        </section>
    )
}