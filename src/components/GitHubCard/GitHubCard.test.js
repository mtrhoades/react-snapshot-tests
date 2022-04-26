import GitHubCard from "./GitHubCard";
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard />).toJSON(); 
    console.log(tree);
    expect(tree).toMatchSnapshot(); 
})