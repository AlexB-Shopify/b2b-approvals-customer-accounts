import { reactExtension, Link, Card, InlineStack, Text } from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.order-index.block.render',
    () => <BlockExtension />
);

function BlockExtension() {
  return (
    <Card padding>
      <InlineStack inlineAlignment="center" spacing="tight">
        <Text>Your team have submitted PO Requests.</Text>
        <Link to="extension:customer-account-ui/">View approval queue</Link>
      </InlineStack>
    </Card>
  );
}