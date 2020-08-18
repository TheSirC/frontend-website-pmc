var filter = (currentValue) => {
    return function(settings, data, index, rowData, counter) {
            var min = currentValue.slider.data("from");
            var max = currentValue.slider.data("to");

            var data_to_filter = data[currentValue.column_number].split(" - ", 2);
            var data_to_filter_min = parseFloat(data_to_filter[0]) || min;
            var data_to_filter_max = parseFloat(data_to_filter[1]) || max;
            return ((isNaN(min) && isNaN(max)) ||
                (isNaN(min) && data_to_filter_max <= max) ||
                (min <= data_to_filter_min && isNaN(max)) ||
                (min <= data_to_filter_min && data_to_filter_max <= max))
        }
};

$(document).ready(function() {
    $(".sampleSlider").ionRangeSlider({
        type: "double",
        grid: true,
        skin: "sharp"
    });
    $("#stock").DataTable();
});
