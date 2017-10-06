class HotClass {
    constructor(elementId) {

        this.hotElementId = elementId;
        this.hotObject = new Handsontable(document.getElementById(elementId));
        this.setting = this.hotObject.getSettings();

        // コンテキストメニュー非表示
        $(document).on('contextmenu', function (e) {
            // Handsontable以外にマウスオーバーされた場合
            if (!$(e.target).closest("#" + _this.hotElementId).length) {
                return false;
            }
        });
    }

    defaultOptions() {
        var options = {
            // セル空の許容を制御
            allowEmpty: true,
            // リスト表示セルにおいて、HTMLタグでの出力をを許容することを制御
            // ※有効にする場合、XSSのリスク有り
            allowHtml: false,
            // コンテキストメニューから列挿入の許可を制御
            allowInsertColumn: true,
            // コンテキストメニューから行挿入の許可を制御
            allowInsertRow: true,
            // validatrで無効なものを受入れる(Sourceとして保持)か制御
            allowInvalid: true,
            // コンテキストメニューから列削除の許可を制御
            allowRemoveColumn: true,
            // コンテキストメニューから行削除の許可を制御
            allowRemoveRow: true,
            // 列自動幅調整の設定
            autoColumnSize: undefined,
            // 
            autoComplete: null,
            // 行自動幅調整の設定
            autoRowSize: null,
            // 最終列でEnterキー又は矢印キーを押下した場合、次行へ移動させるか制御
            autoWrapCol: false,
            // 最終行でEnterキー又は矢印キーを押下した場合、頭の行へ移動させるか制御
            autoWrapRow: false,
            // セルの設定
            cell: [],
            // セルの設定
            cells: undefined,
            // チェックボックを有効にする値(文字列でもOK)
            checkedTemplate: true,
            // Handsontableコンテナに付くクラス
            className: undefined,
            // 列ヘッダーの値（trueの場合、[A,B,C...]、配列文字列も可）
            colHeaders: null,
            // ヘッダーの高さ指定
            columnHeaderHeight: null,
            // カラム設定
            columns: undefined,
            // カラムのソート許可を制御
            columnSorting: undefined,
            // カラム幅設定
            colWidths: undefined,
            // コメントセルに追加するクラス名
            commentedCellClassName: "htCommentCell",
            // コメントの追加を設定
            comments: false,
            // コンテキストメニュー設定
            contextMenu: undefined,
            // Ctrl+Cによるコピーの許可
            copyable: true,
            // Ctrl+Vによる貼り付けの許可
            copyPaste: true,
            // 日付型のフォーマット指定
            correctFormat: false,
            // 選択列にクラス名追加
            currentColClassName: undefined,
            // 選択列ヘッダーにクラス名追加
            currentHeaderClassName: "ht__highlight",
            // 選択行にクラス名追加
            currentRowClassName: undefined,
            // ボーダーのカスタマイズ設定
            customBorders: false,
            // 表現するデータを指定
            data: undefined,
            // 表現するデータとは別にSourceDataとして管理するデータ構造を定義
            dataSchema: undefined,
            // 日付型のバリデーションフォーマットを設定
            dateFormat: "DD/MM/YYYY",
            // ヘッダー固定時の位置の正確性テストを行う場合の設定
            debug: false,
            // 日付型のデフォルト値を設定
            defaultDate: null,
            // セルの単体選択、範囲選択の表現の非活性を制御
            disableVisualSelection: false,
            // セルの型設定
            editor: "text",
            // trueの場合、Enterキーで編集モードへ、falseの場合、セル移動
            enterBeginsEditing: true,
            // Enterキー押下後の移動セル位置を指定
            enterMoves: { row: 1, col: 0 },
            // fill機能(セル右下ドラック処理)の制御
            fillHandle: true,
            // リスト表示セルで入力中のリスト絞込み実行を制御
            filter: true,
            // リストの絞込みでの大文字小文字を考慮するか制御
            filteringCaseSensitive: false,
            // 列固定
            fixedColumnsLeft: 0,
            // 行固定
            fixedRowsTop: 0,
            // Numeric型のフォーマット設定
            format: "0",
            // セルに格納された値に対して、カーソルを当てて選択できるか制御
            fragmentSelection: false,
            // 高さ指定
            height: undefined,
            // バリデーションで無効となったセルに対して付与されるクラス名を設定
            invalidCellClassName: 'htInvalid',
            // チェックボックス型のセルにおいて、チェックボックスの前後にテキストを表示したい場合に設定
            label: undefined,
            // Numeric型の言語フォーマット設定
            language: 'en-US',
            // 
            manualColumnFreeze: null,
            // 列のドラック移動の許容制御
            manualColumnMove: undefined,
            // 列のドラックリサイズの許容制御
            manualColumnResize: undefined,
            // 行のドラック移動の許容制御
            manualRowMove: undefined,
            // 行のドラックリサイズの許容制御
            manualRowResize: undefined,
            // 拡張可能最大列の指定
            maxCols: Infinity,
            // 拡張可能最大行の指定
            maxRows: Infinity,
            // セル結合設定
            mergeCells: false,
            // 最小列数指定
            minCols: 0,
             // 最小行数指定
            minRows: 0,
            // 未入力列の表示数設定
            minSpareCols: 0,
            // 未入力行の表示数設定
            minSpareRows: 0,
            // ドラックによる範囲選択の許容を制御
            multiSelect: true,
            // 文字の折り返し発生時に付与するクラス名を設定
            noWordWrapClassName: 'htNoWrap',
            // データソースが切り替わった場合にレンダーを走らせるか制御
            observeChanges: false,
            // テーブルが非表示となっている場合も、observeChangesを実行するか制御
            observeDOMVisibility: true,
            // テーブル外をクリックした場合、フォーカスを外すか制御
            outsideClickDeselects: true,
            // 列の操作状態をローカルストレージに管理
            persistentState: false,
            // 空セルへのプレースフォルダー表示文字列を設定
            placeholder: false,
            // プレースフォルダーセルへ付与するクラス名を設定
            placeholderCellClassName: 'htPlaceholder',
            // 
            preventOverflow: false,
            // セルの読み取り専用制御
            readOnly: false,
            // セルの読み取り専用へ付与するクラス名を設定
            readOnlyCellClassName: 'htDimmed',
            // 仮想レンダリング機能の有効化
            renderAllRows: false,
            // レンダー設定
            renderer: undefined,
            // 行ヘッダータイトル設定
            rowHeaders: null,
            // 行ヘッダーの幅設定
            rowHeaderWidth: undefined,
            // 行ヘッダーの高さ設定
            rowHeights: undefined,
            // 検索機能の有効化制御
            search: false,
            // 選択式セルの内容設定
            selectOptions: null,
            // ペースト時の対象外として列へ設定
            skipColumnOnPaste: false,
            // リストの絞込み時、サジェストされたリストのソートを実行するか制御
            sortByRelevance: true,
            // カラム毎のソート時処理を設定
            sortFunction: undefined,
            // ソートの目印表示制御
            sortIndicator: false,
            // リスト型のリストソース設定
            source: undefined,
            // 初期表示での列表示数を設定
            startCols: 5,
            // 初期表示での行表示数を設定
            startRows: 5,
            // 自動列幅調整の設定
            stretchH: 'none',
            // リスト型において、リストソース以外の文字が入力された場合の有効化の制御
            strict: false,
            // テーブルへ付与するクラス名を設定
            tableClassName: undefined,
            // タブ押下時のセル移動幅を制御
            tabMoves: { row: 0, col: 1 },
            // 列タイトルの設定
            title: undefined,
            // リスト型セルにおいて、リストの幅をセルの幅に合わせるか制御
            trimDropdown: true,
            // 入力値に対してトリムを行うか制御
            trimWhitespace: true,
            // セル型の指定
            type: 'text',
            // チェックボックス型セルにおいて、未チェック時に返す値を定義
            uncheckedTemplate: false,
            // undo、redoの有効化制御
            undo: undefined,
            // セルチェック処理の設定
            validator: undefined,
            // 仮想レンダリングにおいて、隠れている列のレンダリング数を指定
            viewportColumnRenderingOffset: 'auto',
            // 仮想レンダリングにおいて、隠れている行のレンダリング数を指定
            viewportRowRenderingOffset: 'auto',
            // リスト型セルにおいて、リストの表示数を設定
            visibleRows: 10,
            // セルの幅設定
            width: undefined,
            // 文字の折り返し許可を制御
            wordWrap: true
        }
        return options;
    }

    updateSettings(options) {
        this.hotObject.updateSettings(options);
    }

    load(jsonData) {
        this.hotObject.loadData(JSON.parse(jsonData));
    }
}

class HotUtil {
    constructor() {
    }

    setTextColumn(colName, width, readOnlyFlg, maxLength, addClassName, renderer) {
        this.readOnlyFlg = readOnlyFlg === undefined ? true : readOnlyFlg;
        this.addClassName = addClassName === undefined ? "" : addClassName;
        this.renderer = renderer === undefined ? undefined : renderer;

        let config = new Object;
        let settingItem = new Object;

        settingItem.type = "text";
        settingItem.data = colName;
        settingItem.maxLength = maxLength;
        settingItem.readOnly = this.readOnlyFlg;
        settingItem.className = this.addClassName;
        settingItem.sortEnable = true;
        settingItem.required = false;
        if (renderer) {
            settingItem.renderer = renderer;
        }
        config.width = width;
        config.setting = settingItem;

        return config;
    }

    setNumColumn(colName, width, readOnlyFlg, maxLength, addClassName, format, minusFlg, renderer) {
        this.readOnlyFlg = readOnlyFlg === undefined ? true : readOnlyFlg;
        this.maxLength = maxLength === undefined ? 0 : maxLength;
        this.addClassName = addClassName === undefined ? "" : addClassName;
        this.format = format === undefined ? "0,0" : format;
        this.minusFlg = minusFlg === undefined ? true : minusFlg;
        this.renderer = renderer === undefined ? undefined : renderer;

        let config = new Object;
        let settingItem = new Object;

        settingItem.type = "numeric";
        settingItem.data = colName;
        settingItem.maxLength = maxLength;
        settingItem.readOnly = this.readOnlyFlg;
        settingItem.className = this.addClassName;
        settingItem.format = this.format;
        settingItem.minusflag = this.minusFlg
        settingItem.sortEnable = true;
        settingItem.required = false;
        if (renderer) {
            settingItem.renderer = renderer;
        }
        config.width = width;
        config.setting = settingItem;

        return config;
    }

    setCheckboxColumn(colName, width, readOnlyFlg, addClassName, renderer) {
        this.readOnlyFlg = readOnlyFlg === undefined ? true : readOnlyFlg;
        this.addClassName = addClassName === undefined ? "" : addClassName;
        this.renderer = renderer === undefined ? undefined : renderer;

        let config = new Object;
        let settingItem = new Object;

        settingItem.type = 'checkbox';
        settingItem.data = colName;
        settingItem.readOnly = this.readOnlyFlg;
        settingItem.className = this.addClassName;
        settingItem.sortEnable = true;
        settingItem.required = false;
        if (renderer) {
            settingItem.renderer = renderer;
        }
        config.width = width;
        config.setting = settingItem;

        return config;
    }

    setHtmlColumn(colName, width, readOnlyFlg, addClassName, renderer) {
        this.readOnlyFlg = readOnlyFlg === undefined ? true : readOnlyFlg;
        this.addClassName = addClassName === undefined ? "" : addClassName;
        this.renderer = renderer === undefined ? undefined : renderer;

        let config = new Object;
        let settingItem = new Object;

        settingItem.renderer = 'html';
        settingItem.data = colName;
        settingItem.readOnly = this.readOnlyFlg;
        settingItem.className = this.addClassName;
        settingItem.sortEnable = true;
        settingItem.required = false;
        if (renderer) {
            settingItem.renderer = renderer;
        }
        config.width = width;
        config.setting = settingItem;

        return config;
    }
}
let hotUtil = new HotUtil();