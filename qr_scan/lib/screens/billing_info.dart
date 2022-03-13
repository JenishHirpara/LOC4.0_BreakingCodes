import 'package:flutter/material.dart';

import '../widgets/order_item.dart';

class BillingInfo extends StatefulWidget {
  static const routeName = '/billing-info';
  const BillingInfo({Key? key}) : super(key: key);

  @override
  State<BillingInfo> createState() => _BillingInfoState();
}

List id = ['245432646', '23535236', '14765436', '76438321', '1688765'];

List total = ['240', '124', '470', '360', '510'];

class _BillingInfoState extends State<BillingInfo> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Billing Info'),
      ),
      body: ListView.builder(
        itemBuilder: (ctx, i) => OrderItem(id[i], total[i]),
        itemCount: 5,
      ),
    );
  }
}
