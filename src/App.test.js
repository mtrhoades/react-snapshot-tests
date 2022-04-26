import App from './App';
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON() // make variable called tree to equal renderer.create(main app component).toJSON which turns the component representation into JSON format.
  console.log(tree)
  expect(tree).toMatchSnapshot() // compares the new snapshot in tree to the saved snapshot if one already exists. If they match, test passes, if they do not match, test fails, and if a snapshot does not already exist, it creates one and the test passes.
})
