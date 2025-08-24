# Component Library

## Overview

The bolt.new.zion.app component library provides a comprehensive set of reusable UI components built with React and TypeScript. These components are designed to be accessible, performant, and easily customizable.

## Getting Started

### Installation
Components are included with the main project. No additional installation required.

### Basic Usage
```tsx
import { Button, Card, Input } from '@/components';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Core Components

### Button Component

#### Basic Button
```tsx
import { Button } from '@/components';

<Button>Default Button</Button>
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
```

#### Button Variants
```tsx
// Available variants
<Button variant="primary" />    // Primary action
<Button variant="secondary" />  // Secondary action
<Button variant="success" />    // Success state
<Button variant="danger" />     // Danger/delete action
<Button variant="warning" />    // Warning state
<Button variant="info" />       // Informational
<Button variant="outline" />    // Outlined style
<Button variant="ghost" />      // Minimal styling
```

#### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

#### Button States
```tsx
<Button disabled>Disabled Button</Button>
<Button loading>Loading...</Button>
<Button loading loadingText="Processing...">Submit</Button>
```

#### Button with Icons
```tsx
import { Icon } from '@/components';

<Button>
  <Icon name="plus" />
  Add Item
</Button>

<Button iconOnly>
  <Icon name="settings" />
</Button>
```

### Card Component

#### Basic Card
```tsx
import { Card } from '@/components';

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</Card>
```

#### Card Variants
```tsx
<Card variant="default" />
<Card variant="elevated" />
<Card variant="outlined" />
<Card variant="filled" />
```

#### Card with Header and Footer
```tsx
<Card>
  <Card.Header>
    <h3>Card Header</h3>
    <Button variant="ghost" size="sm">Action</Button>
  </Card.Header>
  
  <Card.Body>
    <p>Card content...</p>
  </Card.Body>
  
  <Card.Footer>
    <Button variant="primary">Save</Button>
    <Button variant="outline">Cancel</Button>
  </Card.Footer>
</Card>
```

#### Interactive Card
```tsx
<Card interactive hoverable>
  <h3>Clickable Card</h3>
  <p>This card can be clicked and has hover effects.</p>
</Card>
```

### Input Component

#### Basic Input
```tsx
import { Input } from '@/components';

<Input placeholder="Enter text..." />
<Input label="Username" placeholder="Enter username" />
<Input label="Email" type="email" required />
```

#### Input Variants
```tsx
<Input variant="default" />
<Input variant="filled" />
<Input variant="outline" />
<Input variant="unstyled" />
```

#### Input Sizes
```tsx
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
```

#### Input with Icons
```tsx
<Input
  leftIcon={<Icon name="search" />}
  rightIcon={<Icon name="clear" />}
  placeholder="Search..."
/>
```

#### Input States
```tsx
<Input error="This field is required" />
<Input success="Input is valid" />
<Input disabled placeholder="Disabled input" />
```

### Form Components

#### Form Container
```tsx
import { Form } from '@/components';

<Form onSubmit={handleSubmit}>
  <Form.Field>
    <Form.Label>Username</Form.Label>
    <Form.Input name="username" required />
    <Form.Help>Enter your username</Form.Help>
  </Form.Field>
  
  <Form.Field>
    <Form.Label>Password</Form.Label>
    <Form.Input name="password" type="password" required />
    <Form.Error>Password is required</Form.Error>
  </Form.Field>
  
  <Button type="submit">Submit</Button>
</Form>
```

#### Form Validation
```tsx
<Form onSubmit={handleSubmit} validationSchema={validationSchema}>
  <Form.Field>
    <Form.Label>Email</Form.Label>
    <Form.Input name="email" type="email" />
    <Form.Error name="email" />
  </Form.Field>
</Form>
```

### Navigation Components

#### Navigation Bar
```tsx
import { Navbar } from '@/components';

<Navbar>
  <Navbar.Brand>
    <img src="/logo.svg" alt="Logo" />
    <span>Bolt App</span>
  </Navbar.Brand>
  
  <Navbar.Menu>
    <Navbar.Item href="/">Home</Navbar.Item>
    <Navbar.Item href="/about">About</Navbar.Item>
    <Navbar.Item href="/contact">Contact</Navbar.Item>
  </Navbar.Menu>
  
  <Navbar.Actions>
    <Button variant="primary">Login</Button>
  </Navbar.Actions>
</Navbar>
```

#### Breadcrumbs
```tsx
import { Breadcrumbs } from '@/components';

<Breadcrumbs>
  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
  <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
</Breadcrumbs>
```

#### Pagination
```tsx
import { Pagination } from '@/components';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={handlePageChange}
/>
```

### Data Display Components

#### Table Component
```tsx
import { Table } from '@/components';

<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>
        <Badge variant="success">Active</Badge>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

#### List Component
```tsx
import { List } from '@/components';

<List>
  <List.Item>
    <List.ItemIcon><Icon name="check" /></List.ItemIcon>
    <List.ItemContent>
      <List.ItemTitle>List Item 1</List.ItemTitle>
      <List.ItemDescription>Description for item 1</List.ItemDescription>
    </List.ItemContent>
    <List.ItemAction>
      <Button size="sm">Action</Button>
    </List.ItemAction>
  </List.Item>
</List>
```

#### Badge Component
```tsx
import { Badge } from '@/components';

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>

<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

### Feedback Components

#### Alert Component
```tsx
import { Alert } from '@/components';

<Alert variant="info">
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>
    This is an informational alert.
  </Alert.Description>
</Alert>

<Alert variant="success" closable>
  <Alert.Title>Success!</Alert.Title>
  <Alert.Description>
    Operation completed successfully.
  </Alert.Description>
</Alert>
```

#### Toast Component
```tsx
import { Toast, useToast } from '@/components';

function MyComponent() {
  const toast = useToast();
  
  const showToast = () => {
    toast({
      title: 'Success',
      description: 'Action completed successfully',
      variant: 'success',
      duration: 5000
    });
  };
  
  return <Button onClick={showToast}>Show Toast</Button>;
}
```

#### Progress Component
```tsx
import { Progress } from '@/components';

<Progress value={75} max={100} />
<Progress value={75} max={100} size="sm" />
<Progress value={75} max={100} size="lg" />

<Progress value={75} max={100} variant="success" />
<Progress value={75} max={100} variant="warning" />
<Progress value={75} max={100} variant="danger" />
```

### Layout Components

#### Container Component
```tsx
import { Container } from '@/components';

<Container>
  <h1>Page Content</h1>
  <p>This content is contained within a responsive container.</p>
</Container>

<Container size="sm">Small container</Container>
<Container size="md">Medium container</Container>
<Container size="lg">Large container</Container>
<Container size="xl">Extra large container</Container>
```

#### Grid System
```tsx
import { Grid, Col } from '@/components';

<Grid>
  <Col span={12} md={6} lg={4}>
    <Card>Column 1</Card>
  </Col>
  <Col span={12} md={6} lg={4}>
    <Card>Column 2</Card>
  </Col>
  <Col span={12} md={12} lg={4}>
    <Card>Column 3</Card>
  </Col>
</Grid>
```

#### Stack Component
```tsx
import { Stack } from '@/components';

<Stack spacing="md">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Stack>

<Stack direction="horizontal" spacing="lg">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</Stack>
```

### Modal Components

#### Basic Modal
```tsx
import { Modal, useModal } from '@/components';

function MyComponent() {
  const { isOpen, open, close } = useModal();
  
  return (
    <>
      <Button onClick={open}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={close}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        
        <Modal.Body>
          <p>Modal content goes here...</p>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="outline" onClick={close}>Cancel</Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

#### Modal Variants
```tsx
<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>
<Modal size="full">Full screen modal</Modal>
```

### Utility Components

#### Icon Component
```tsx
import { Icon } from '@/components';

<Icon name="home" />
<Icon name="settings" size="lg" />
<Icon name="user" color="primary" />
<Icon name="check" className="custom-icon" />
```

#### Spinner Component
```tsx
import { Spinner } from '@/components';

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />
<Spinner variant="primary" />
<Spinner variant="secondary" />
```

#### Divider Component
```tsx
import { Divider } from '@/components';

<Divider />
<Divider orientation="vertical" />
<Divider variant="dashed" />
<Divider variant="dotted" />
```

## Component Props

### Common Props

Most components support these common props:

```tsx
interface CommonProps {
  className?: string;           // Custom CSS classes
  style?: React.CSSProperties;  // Inline styles
  id?: string;                  // Element ID
  'data-testid'?: string;      // Testing identifier
  children?: React.ReactNode;   // Child elements
}
```

### Size Props

```tsx
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

### Variant Props

```tsx
type Variant = 
  | 'primary' 
  | 'secondary' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'outline' 
  | 'ghost';
```

## Styling and Theming

### CSS Custom Properties

Components use CSS custom properties for theming:

```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --color-info: #17a2b8;
  
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 3rem;
  
  --border-radius: 0.375rem;
  --border-radius-sm: 0.25rem;
  --border-radius-lg: 0.5rem;
  
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
}
```

### Custom Themes

Create custom themes by overriding CSS variables:

```css
[data-theme="dark"] {
  --color-primary: #0d6efd;
  --color-background: #212529;
  --color-text: #f8f9fa;
  --color-border: #495057;
}
```

### Component-Specific Styling

```tsx
// Using className for custom styling
<Button className="custom-button">Custom Button</Button>

// Using style for inline styles
<Card style={{ backgroundColor: '#f0f0f0' }}>Custom Card</Card>

// Using CSS modules
import styles from './MyComponent.module.css';
<Button className={styles.customButton}>Styled Button</Button>
```

## Accessibility

### ARIA Support

All components include proper ARIA attributes:

```tsx
<Button aria-label="Close dialog">×</Button>
<Input aria-describedby="email-help" />
<Modal aria-labelledby="modal-title" />
```

### Keyboard Navigation

Components support keyboard navigation:

- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close modals and dropdowns
- **Arrow keys**: Navigate lists and menus

### Screen Reader Support

- Semantic HTML elements
- Proper heading hierarchy
- Descriptive labels and alt text
- ARIA live regions for dynamic content

## Performance Optimization

### Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<Spinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Memoization

```tsx
import { memo } from 'react';

const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // Component logic
  return <div>{/* render content */}</div>;
});
```

### Bundle Optimization

```tsx
// Import only needed components
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

// Instead of importing all components
// import { Button, Card } from '@/components';
```

## Testing

### Component Testing

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components';

test('Button renders with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

test('Button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Visual Regression Testing

```tsx
import { render } from '@testing-library/react';
import { Button } from '@/components';

test('Button matches snapshot', () => {
  const { container } = render(<Button>Click me</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
```

## Contributing

### Adding New Components

1. Create component file in `components/` directory
2. Follow naming conventions and file structure
3. Include TypeScript interfaces
4. Add comprehensive tests
5. Update documentation
6. Submit pull request

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript types
- Follow accessibility best practices
- Include comprehensive documentation
- Write unit and integration tests
- Use consistent naming conventions

## Examples

### Complete Form Example

```tsx
import { Form, Button, Input, Card } from '@/components';

function ContactForm() {
  const handleSubmit = (data) => {
    console.log('Form data:', data);
  };
  
  return (
    <Card>
      <Card.Header>
        <h2>Contact Us</h2>
      </Card.Header>
      
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Input name="name" required />
            <Form.Help>Enter your full name</Form.Help>
          </Form.Field>
          
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input name="email" type="email" required />
            <Form.Error name="email" />
          </Form.Field>
          
          <Form.Field>
            <Form.Label>Message</Form.Label>
            <Form.Textarea name="message" rows={4} required />
          </Form.Field>
          
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
```

### Dashboard Layout Example

```tsx
import { Container, Grid, Col, Card, Navbar } from '@/components';

function Dashboard() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Item href="/dashboard">Overview</Navbar.Item>
          <Navbar.Item href="/analytics">Analytics</Navbar.Item>
          <Navbar.Item href="/settings">Settings</Navbar.Item>
        </Navbar.Menu>
      </Navbar>
      
      <Container>
        <Grid>
          <Col span={12} md={6} lg={3}>
            <Card>
              <h3>Total Users</h3>
              <p>1,234</p>
            </Card>
          </Col>
          
          <Col span={12} md={6} lg={3}>
            <Card>
              <h3>Revenue</h3>
              <p>$12,345</p>
            </Card>
          </Col>
          
          <Col span={12} md={6} lg={3}>
            <Card>
              <h3>Orders</h3>
              <p>567</p>
            </Card>
          </Col>
          
          <Col span={12} md={6} lg={3}>
            <Card>
              <h3>Growth</h3>
              <p>+12.5%</p>
            </Card>
          </Col>
        </Grid>
      </Container>
    </>
  );
}
```

## Support

### Documentation
- [Component API Reference](API_REFERENCE.md)
- [Developer Guide](DEVELOPER_GUIDE.md)
- [Storybook](https://storybook.zion-holdings.com)

### Community
- GitHub Issues and Discussions
- Component Library Wiki
- Contributing Guidelines

### Contact
- **Component Questions**: components@zion-holdings.com
- **Bug Reports**: bugs@zion-holdings.com
- **Feature Requests**: features@zion-holdings.com

---

*This component library is continuously evolving. Check the GitHub repository for the latest updates and new components.*