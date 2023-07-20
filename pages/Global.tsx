import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native"
import { Button, DataTable, FAB, IconButton, Text, TextInput } from "react-native-paper";
import { colors, global_styles, login_styles } from "../styles/style";

const SafeArea = ({ insets, children }: { insets: any, children: any }) => {
    return (<View style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    }}>
        {children}
    </View>);
}

const TableView = ({ tabledata }: { tabledata: any[] }) => {

    const [page, setPage] = useState<number>(0);
    const itemsPerPage = 10;

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, tabledata.length);

    return (
        <>
            <ScrollView  >
                <View>
                    <View style={global_styles.centerContainer}>
                        <Button icon={"calendar-month"} textColor={colors.darkPurple} style={global_styles.date_btn} mode="outlined">Start Date</Button>
                        <IconButton iconColor={colors.mediumGrey} icon="arrow-right" />
                        <Button icon={"calendar-month"} textColor={colors.darkPurple} style={global_styles.date_btn} mode="outlined">End Date</Button>
                    </View>
                    <View style={global_styles.centerContainer}>
                        <IconButton icon="filter" iconColor={colors.white} style={global_styles.filter_btn} />
                        <TextInput placeholder="Search" contentStyle={{ marginLeft: 45, paddingTop: 0, paddingBottom: 0 }} outlineColor={colors.mediumGrey} left={<TextInput.Icon icon={"magnify"} style={{ top: 4 }} />} style={global_styles.search_input} mode="outlined" />
                        <IconButton icon="download" iconColor={colors.white} style={global_styles.download_btn} />
                    </View>

                </View>
                <ScrollView horizontal>
                    <DataTable style={{ width: 800 }}>
                        <DataTable.Header >

                            {tabledata.length > 0 && Object.keys(tabledata[0]).map((title_val, index) => (
                                <DataTable.Title key={index}>
                                    {title_val}
                                </DataTable.Title>
                            ))}

                        </DataTable.Header>
                        {tabledata.slice(from, to).map((item_val) => (
                            <DataTable.Row >
                                {Object.values(item_val).map((value: any) => (
                                    <DataTable.Cell >
                                        {value}
                                    </DataTable.Cell>
                                ))}

                            </DataTable.Row>
                        ))}
                    </DataTable>
                </ScrollView>
                {tabledata.length > 0 ? (<DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(tabledata.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${tabledata.length}`}
                    numberOfItemsPerPage={itemsPerPage}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />) : (
                    <Text style={{textAlign: 'center', marginTop: 20}} variant="headlineMedium" >No Data Avaialble</Text>
                )}

            </ScrollView>
 
        </>
    )
}

export { SafeArea, TableView };