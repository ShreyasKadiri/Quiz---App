import React from 'react';


type Props = {
    question: string;
    answers: string[];
    questionNumber : number;
    userAnswer : any;
    callBack : any;
    totalQuestions : number;
}





const QuestionCard: React.FC<Props>= ({
question, 
answers,
questionNumber, 
userAnswer, 
callBack,
totalQuestions,
}) => (

 <div>

<p className="number">
    Question : {questionNumber} / {totalQuestions}
</p>

<p dangerouslySetInnerHTML={{  __html: question}} />
<div>
{answers.map  (answer => (
    <div>
        <button disabled = {userAnswer} onClick={callBack}>
            <span dangerouslySetInnerHTML = {{__html: answer}} />
        </button>
    </div>
))}
</div>

 </div>
 );
















export default QuestionCard;











