import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});


it('renders correct name', () => {

  const onPlayerAdd = jest.fn();

  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

  const nameInput = addPlayerComponent.find('input').first().getDOMNode();

  nameInput.value = 'Ania';
  const form =addPlayerComponent.find('form');
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith('Ania');
})

/*

it('renders correct score', () => {
  const playerScore = 10;
  const playerComponent = shallow(<Player score={playerScore} />);

  const playerScoreRendered = Number(playerComponent.find('.Player___score').text());

  expect(playerScoreRendered).toEqual(playerScore);
})

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
const mockedOnPlayerScoreChange = jest.fn();
const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

const plusButton = playerComponent.find('.Player___button').first();

plusButton.simulate('click');

expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
const mockedOnPlayerScoreChange = jest.fn();
const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

const plusButton = playerComponent.find('.Player___button').last();

plusButton.simulate('click');

expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});
*/
