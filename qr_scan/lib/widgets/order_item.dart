import 'package:flutter/material.dart';

class OrderItem extends StatefulWidget {
  final String id;
  final String total;
  OrderItem(this.id, this.total);

  @override
  State<OrderItem> createState() => _OrderItemState();
}

class _OrderItemState extends State<OrderItem> {
  var _expanded = false;

  List products = [
    {'title': 'Lays', 'quantity': '2', 'price': '20'},
    {'title': 'Kurkure', 'quantity': '4', 'price': '10'},
    {'title': 'DairyMilk', 'quantity': '6', 'price': '25'},
    {'title': 'Maggi', 'quantity': '1', 'price': '10'},
  ];

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 300),
      height: _expanded ? 250 : 95,
      child: Card(
        margin: const EdgeInsets.all(10),
        child: Column(
          children: <Widget>[
            ListTile(
              title: Text('Order Id: ' + widget.id),
              subtitle: Text(
                'Total: ' + widget.total,
              ),
              trailing: IconButton(
                icon: Icon(_expanded ? Icons.expand_less : Icons.expand_more),
                onPressed: () {
                  setState(() {
                    _expanded = !_expanded;
                  });
                },
              ),
            ),
            AnimatedContainer(
              duration: const Duration(milliseconds: 300),
              padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 4),
              height: _expanded ? 150 : 0,
              child: ListView(
                children: products
                    .map(
                      (prod) => Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: <Widget>[
                          Text(
                            prod['title'],
                            style: const TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          Text(
                            '${prod['quantity']}x \$${prod['price']}',
                            style: const TextStyle(
                              fontSize: 18,
                              color: Colors.grey,
                            ),
                          ),
                        ],
                      ),
                    )
                    .toList(),
              ),
            )
          ],
        ),
      ),
    );
  }
}
