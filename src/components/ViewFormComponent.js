import React, { Component } from 'react';
import '../App.css';

class ViewFormComponent extends Component {


  render() {
    return (
    	<div className="main-body">
			<h1>Cohort !COHORT_NUMBER!</h1>
			<p>Trainee: !TRAINEE_NAME!</p>
			<p>Week Number: !WEEK NUMBER!</p>
			<p>Feedback given: !FEEDBACK_GIVEN!</p>
			<h3>Feedback Form</h3>
			
			<div>
				<p>Rating !RATING_SCORE!</p>
				<div className="question-list">
					<div className="question">
						<p><strong>QUESTION 1</strong></p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum maximus urna tincidunt, ullamcorper mi bibendum, mattis mi. Aliquam viverra vulputate libero. In orci sapien, rhoncus in fermentum id, lacinia quis orci. Ut commodo vitae nunc eget blandit. Suspendisse mi ligula, suscipit id sollicitudin at, rhoncus at ligula. Integer euismod orci sed commodo viverra. Cras ultrices, mauris in auctor bibendum, erat justo blandit lacus, id vehicula est nunc rhoncus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce egestas tincidunt mi id iaculis. Curabitur luctus quam eget vehicula condimentum. In imperdiet nisi ut ipsum maximus dapibus. Praesent feugiat ut nisi ac molestie. Sed tincidunt ligula lorem. Vivamus vestibulum porttitor dapibus.</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 2</strong></p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus auctor mollis. Cras sodales dolor nec sodales sodales. In pretium nisl quis tortor finibus, ac placerat risus accumsan. Vestibulum sed urna consectetur magna accumsan rhoncus. Pellentesque eros erat, facilisis sed imperdiet sit amet, rutrum vitae leo. Maecenas in tellus eget libero placerat sodales. Fusce aliquam placerat ipsum a accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vitae elementum lacus, ut rhoncus justo. Pellentesque in tincidunt ex, sed ultrices leo. Aliquam eu pharetra enim. Nunc lacus nunc, ornare id varius ac, varius vitae arcu. Nullam scelerisque, est sit amet blandit blandit, nulla neque ultrices tortor, eu porta arcu urna quis neque. Nunc volutpat quis quam in rutrum. Vestibulum viverra eu libero sed posuere.</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 3</strong></p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at tellus sit amet libero consectetur pulvinar. Duis at scelerisque leo. Sed hendrerit libero a tincidunt molestie. Etiam vestibulum sem lorem, sit amet dignissim eros tincidunt quis. Morbi vitae vehicula nibh, id malesuada nisi. Pellentesque vitae diam eu nulla ornare bibendum. Quisque pulvinar leo a condimentum molestie. Sed id sagittis diam.</p>
					</div>
					<div className="question">
						<p><strong>QUESTION 4</strong></p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel augue tempus, eleifend nisi et, blandit eros. Pellentesque nec turpis tristique, porta augue id, rutrum elit.</p>
					</div>

				</div>
			</div>
		</div>
    );
  }
}

export default ViewFormComponent;
